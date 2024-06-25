/* eslint-disable @typescript-eslint/no-explicit-any */
import { TGenericErrorResponse } from "../interface/interface";

const duplicateErrorHandler = (err: any): TGenericErrorResponse => {
  const message = err.message;

  return {
    statusCode: 400,
    message,
    source: [
      {
        path: "",
        message,
      },
    ],
  };
};

export default duplicateErrorHandler;
