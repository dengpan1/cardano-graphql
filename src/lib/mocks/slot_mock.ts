import * as faker from 'faker'
import { RewardPayout, Slot } from '../../graphql_types'

export function generateRewardPayout (slot: Slot): RewardPayout {
  return {
    rewardAccount: {
      address: faker.finance.bitcoinAddress(),
      amount: faker.random.number()
    },
    slot
  }
}
