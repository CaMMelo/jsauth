const rule = require("./rule");

module.exports = {
  NotNull: rule({ fn: (field) => !!field, message: "cannot be null." }),

  MinLength: (size) =>
    rule({
      fn: (field) => field.length >= size,
      message: `must have at least ${size}.`,
    }),

  MaxLength: (size) =>
    rule({
      fn: (field) => field.length <= size,
      message: `must have at most ${size}.`,
    }),

  Matches: (regex) =>
    rule({
      fn: (field) => regex.test(field),
      message: "has invalid format.",
    }),

  Minimum: (value) =>
    rule({
      fn: (field) => field >= value,
      message: `must be at least ${value}.`,
    }),

  Maximum: (value) =>
    rule({
      fn: (field) => field <= value,
      message: `must be at most ${value}.`,
    }),

  Unique: (model, column) =>
    rule({
      fn: async (field) => {
        if (!!field) {
          return false;
        }
        const row = await model.findOne({ where: { column: field } });
        return !!!row;
      },
      message: "already registered.",
    }),
};
