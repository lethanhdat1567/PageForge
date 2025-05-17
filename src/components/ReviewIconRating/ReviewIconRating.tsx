import { Meh, ThumbsDown, ThumbsUp } from 'lucide-react';

function ReviewIconRating({ rating }: { rating: 'good' | 'neutral' | 'bad' }) {
    switch (rating) {
        case 'good':
            return <ThumbsUp color="green" />;
        case 'neutral':
            return <Meh color="#78726d" />;
        case 'bad':
            return <ThumbsDown color="red" />;
        default:
            return;
    }
}

export default ReviewIconRating;
