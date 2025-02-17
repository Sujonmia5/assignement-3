import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

// declare global {
//   namespace Express {
//     interface Request {
//       user: {
//         email: string;
//         role: string;
//         iat: number;
//         exp: number;
//       };
//     }
//   }
// }
