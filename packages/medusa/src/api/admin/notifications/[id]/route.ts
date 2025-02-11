import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "../../../../types/routing"
import { AdminGetNotificationParamsType } from "../validators"
import { refetchEntity } from "../../../utils/refetch-entity"
import { HttpTypes } from "@medusajs/types"

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetNotificationParamsType>,
  res: MedusaResponse<HttpTypes.AdminNotificationResponse>
) => {
  const notification = await refetchEntity(
    "notification",
    req.params.id,
    req.scope,
    req.remoteQueryConfig.fields
  )
  res.status(200).json({ notification })
}
