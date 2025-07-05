interface Props {
  quote: string
}

export default function QuoteCard({ quote }: Props) {
  return (
<div className="bg-white p-4 rounded-xl shadow hover:scale-[1.02] transition-transform duration-300 animate-fade-in border border-gray-200">
  {quote}
</div>
  )
}
