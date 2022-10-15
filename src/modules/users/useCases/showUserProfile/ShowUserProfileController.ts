import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      if (!user_id) {
        throw new Error("Invalid user_id param");
      }

      return response.json(this.showUserProfileUseCase.execute({ user_id }));
    } catch (error) {
      return response
        .status(404)
        .json({ error: error ?? "Internal server error" });
    }
  }
}

export { ShowUserProfileController };
