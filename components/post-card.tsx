import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageCircle, Share2, Info } from "lucide-react"
import type { Post } from "@/lib/data"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="bg-[#e8f4d4] border-2 border-[#c41e3a] p-4 shadow-lg">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-[#5ba4d0] rounded-full flex items-center justify-center flex-shrink-0">
          <Info className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-[#5ba4d0] font-semibold text-sm">{post.institution}</h3>
          <p className="text-xs text-gray-600">{post.date}</p>
          <p className="text-xs text-[#5ba4d0] font-semibold">{post.course}</p>
        </div>
      </div>

      <div className="bg-white border border-[#c41e3a] p-3 mb-3 rounded">
        <p className="text-sm whitespace-pre-line text-gray-800">{post.content}</p>
        <button className="text-xs text-blue-600 hover:underline mt-2">...See More</button>
      </div>

      <div className="flex items-center justify-between text-sm">
        <p className="text-gray-600 text-xs">Posted By – {post.author}</p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 h-8 px-2">
            <ThumbsUp className="w-4 h-4 mr-1" />
            Like
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 h-8 px-2">
            <MessageCircle className="w-4 h-4 mr-1" />
            Comment
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 h-8 px-2">
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
        </div>
      </div>
    </Card>
  )
}
