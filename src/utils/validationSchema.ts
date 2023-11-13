import { z } from 'zod';

export const commonValidationSchema = z.object({
  email: z.string().email('正しいメールアドレスを入力してください'),
  password: z
    .string()
    .min(6, 'パスワードは6文字以上で入力してください')
    .max(50, 'パスワードは50文字以下で入力してください'),
});

export const loginValidationSchema = commonValidationSchema.extend({});

export const registerValidationSchema = commonValidationSchema.extend({
  username: z
    .string()
    .min(1, 'ユーザー名は1文字以上で入力してください')
    .max(15, 'ユーザー名は15文字以下で入力してください'),
  passwordConfirmation: z
    .string()
    .min(6, 'パスワードは6文字以上で入力してください')
    .max(50, 'パスワードは50文字以下で入力してください'),
});

export const sendVerificationEmail = commonValidationSchema.omit({
  password: true,
});

export const sendVerificationCode = z.object({
  code: z
    .number()
    .min(10000, 'コードは5桁の数値でなければなりません')
    .max(99999, 'コードは5桁の数値でなければなりません'),
});

export const changePasswordValidationSchema = commonValidationSchema
  .omit({
    email: true,
  })
  .extend({
    passwordConfirmation: z
      .string()
      .min(6, 'パスワードは6文字以上で入力してください')
      .max(50, 'パスワードは50文字以下で入力してください'),
  });
