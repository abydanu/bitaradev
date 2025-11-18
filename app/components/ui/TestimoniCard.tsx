import type { Testimonial } from '@/app/data/testimoniData';
import { Star } from '@mui/icons-material';

const TestimoniCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm min-w-[400px] mx-4">
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>
            <p className="text-gray-600 italic mb-6 leading-relaxed text-[15px] md:text-base">{testimonial.text}</p>
            <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
            </div>
        </div>
    )
}

export default TestimoniCard;