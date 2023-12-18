import _ from 'lodash'

const Operator = (network, data) => {
  const { address } = data
  const botAddress = network.data.restake.address || data.restake.address
  const minimumReward = network.data.restake.minimumReward || data.restake.minimum_reward

  return {
    address,
    botAddress,
    minimumReward,
    moniker: data.description?.moniker,
    description: data.description,
    data,
  }
}

export default Operator;
