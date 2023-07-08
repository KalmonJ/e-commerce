type ResponseSuccess<T> = { message: "success"; error: null; data: T };
type ResponseError = { message: "fail"; error: string; data: null };

export type ApiResponse<T extends {}> = ResponseSuccess<T> | ResponseError;
