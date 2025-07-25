
interface Props {
    className?: string;
}


const Bullet = ({ className }: Props) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 640q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-80 0-149-30t-122-82t-83-122t-30-150q0-79 30-149t82-122t122-83t150-30"  stroke="currentColor" /></svg>
    )
}

export default Bullet