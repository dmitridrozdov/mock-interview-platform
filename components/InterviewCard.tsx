import dayjs from "dayjs"
import { cn } from "@/lib/utils";

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback | null
    const normalizedType = /mix/gi.test(type) ? "Mixed" : type
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMMM D, YYYY")

    const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalizedType] || "bg-light-600";

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
        <div className="card-interview">
            <div>
                {/* Type Badge */}
                <div
                    className={cn(
                    "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg",
                    badgeColor
                    )}
                >
                    <p className="badge-text ">{normalizedType}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterviewCard