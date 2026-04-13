interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
  date: string;
}

export default function ReviewCard({ name, location, text, date }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-gray-700 mb-4 leading-relaxed">&ldquo;{text}&rdquo;</blockquote>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
}
