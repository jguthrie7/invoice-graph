import { NewGravatar, UpdatedGravatar } from '../generated/Gravity/Gravity'
import { PaymentAccepted } from '../generated/Invoice/Invoice'
import { Payment } from '../generated/schema'

export function handlePaymentAccepted(event: PaymentAccepted): void {
  let payment = new Payment(event.transaction.hash.toHexString());
  payment.amount = event.params.value;
  payment.tokenContract = event.params.tokenContract;
  payment.blockNumber = event.block.number;
  payment.save();
}

// export function handleNewGravatar(event: NewGravatar): void {
//   let gravatar = new Gravatar(event.params.id.toHex())
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }
//
// export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//   let id = event.params.id.toHex()
//   let gravatar = Gravatar.load(id)
//   if (gravatar == null) {
//     gravatar = new Gravatar(id)
//   }
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }
