import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      if (!user_id) {
        throw new Error("Invalid user_id param");
      }

      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.send(user);
    } catch (error) {
      return response
        .status(404)
        .json({ error: error ?? "Internal server error" });
    }
  }
}

export { TurnUserAdminController };
