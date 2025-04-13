import { loginValidator, registerValidator } from "src/utils/validators";
import { z } from "zod";

export type LoginForm = z.infer<typeof loginValidator>;
export type RegisterForm = z.infer<typeof registerValidator>;
