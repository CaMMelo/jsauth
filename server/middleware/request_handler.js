const TypeCast = (typename, obj) => {
  return {
    boolean: Boolean.bind(null, obj),
    number: Number.bind(null, obj),
    string: String.bind(null, obj),
    symbol: Symbol.bind(null, obj),
  }[typename]();
};

const Traverse = (obj, schema) => {
  const args = [];

  for (const key in schema) {
    if (typeof schema[key] === "function") {
      args.push(new schema[key](obj[key]));
    } else if (typeof schema[key] === "object") {
      args.push(...Traverse(obj[key], schema[key]));
    } else if (typeof schema[key] === "string") {
      console.log(schema[key]);
      args.push(TypeCast(schema[key], obj[key]));
    }
  }

  return args;
};

module.exports = (callback, schema) => {
  return async (req, res) => {
    const args = Traverse(req, schema);
    callback(req, ...args).then(
      (result) => {
        res.send(result);
      },
      ({ status, errors }) => {
        res.status(status).send(errors);
      }
    );
  };
};
