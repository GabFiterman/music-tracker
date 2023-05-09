const Promisse = require("bluebird");
const bcrypt = Promisse.promisifyAll(require("bcrypt"));

async function hashPassword(user, options) {
  const SALT_ROUNDS = 8;
  if (!user.changed("password")) {
    return;
  }

  const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
  user.setDataValue("password", hash);
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        // beforeSave: hashPassword,
      },
    }
  );

  User.prototype.comparePassword = async function (password) {
    const isPasswordValid = await bcrypt.compare(password, this.password);
    return isPasswordValid;
  };

  return User;
};
