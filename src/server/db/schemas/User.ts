import { models, model, Schema } from "mongoose";
import { hash } from "bcrypt";
import { CreateUser } from "@/generated/graphql";

const UserSchema = new Schema<CreateUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this["password"] = await hash(this.password, 10);
});

export { User };
