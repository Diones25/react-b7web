type Props = {
  rate: number
}

const RatingHard = ({ rate }: Props) => {
  if(rate > 5) {
    rate = 5;
  }
  if(rate < 0) {
    rate = 0;
  }

  const emojis = ['','😯','😟','😟','🙂','😀']
  const rateInt = Math.floor(rate);

  const stars = `${emojis[rateInt]}`.repeat(rateInt) + '😶'.repeat(5 - rateInt);

  return (
    <div className="flex items-center text-6xl text-white">
      <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
      <div className="ml-3">{ stars }</div>
    </div>
  )
}

export default RatingHard
