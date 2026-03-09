import {
  Card,
  CardBody,
  Avatar,
  Button,
  Divider,
  Input,
} from "@heroui/react";
import { PhotoGrid } from "./PhotoGrid";

// Simple SVG Icons (or use any icon library)
const ThumbsUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H5a2 2 0 01-2-2v-7a2 2 0 012-2h2.924l4.924-8.385A1 1 0 0114 3v7z" />
  </svg>
);

const CommentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const DotsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

interface PostCardProps {
  author: {
    name: string;
    avatar: string;
  };
  taggedWith?: string[];
  timestamp: string;
  content: string;
  hashtags?: string[];
  images: string[];
  reactions: {
    count: number;
    users: string;
  };
  commentAvatar?: string;
  commentPlaceholder?: string;
}

export const PostCard = ({
  author,
  taggedWith = [],
  timestamp,
  content,
  hashtags = [],
  images,
  reactions,
  commentAvatar,
  commentPlaceholder = "Write a comment...",
}: PostCardProps) => {
  const taggedDisplay =
    taggedWith.length > 0
      ? taggedWith.length === 1
        ? `is with ${taggedWith[0]}.`
        : `is with ${taggedWith[0]} and ${taggedWith.length - 1} ${
            taggedWith.length - 1 === 1 ? "other" : "others"
          }.`
      : "";

  return (
    <Card className="w-full max-w-[500px] bg-[#242526] text-white rounded-lg shadow-lg border-0">
      <CardBody className="p-0">
        {/* Header */}
        <div className="flex items-start justify-between px-4 pt-4 pb-2">
          <div className="flex items-center gap-3">
            <Avatar src={author.avatar} size="md" />
            <div>
              <p className="text-sm font-semibold leading-tight">
                <span className="text-white">{author.name}</span>{" "}
                {taggedDisplay && (
                  <span className="text-[#b0b3b8] font-normal">
                    {taggedWith.length > 1 ? "is with " : "is with "}
                    <span className="text-white font-semibold cursor-pointer hover:underline">
                      {taggedWith[0]}
                    </span>
                    {taggedWith.length > 1 && (
                      <span className="text-[#b0b3b8]">
                        {" "}and {taggedWith.length - 1}{" "}
                        {taggedWith.length - 1 === 1 ? "other" : "others"}.
                      </span>
                    )}
                  </span>
                )}
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs text-[#b0b3b8]">{timestamp}</span>
                <span className="text-[#b0b3b8]">·</span>
                {/* Globe / Friends icon */}
                <svg className="w-3 h-3 text-[#b0b3b8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
            </div>
          </div>
          <Button isIconOnly variant="light" size="sm" className="text-[#b0b3b8] min-w-unit-8 w-8 h-8">
            <DotsIcon />
          </Button>
        </div>

        {/* Post Content */}
        <div className="px-4 pb-3">
          <p className="text-sm text-white">
            {content}{" "}
          </p>
          {hashtags.length > 0 && (
            <p className="text-sm text-[#2d88ff] mt-1">
              {hashtags.map((tag) => (
                <span key={tag} className="cursor-pointer hover:underline mr-1">
                  {tag}
                </span>
              ))}
            </p>
          )}
        </div>

        {/* Photo Grid */}
        <PhotoGrid images={images} />

        {/* Reactions */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1">
            <span className="text-lg">❤️👍</span>
            <span className="text-sm text-[#b0b3b8]">
              {reactions.users} and {reactions.count} others
            </span>
          </div>
        </div>

        <Divider className="bg-[#3e4042]" />

        {/* Action Buttons */}
        <div className="flex px-2 py-1">
          {[
            { icon: <ThumbsUpIcon />, label: "Like" },
            { icon: <CommentIcon />, label: "Comment" },
            { icon: <ShareIcon />, label: "Share" },
          ].map(({ icon, label }) => (
            <Button
              key={label}
              variant="light"
              className="flex-1 text-[#b0b3b8] hover:bg-[#3a3b3c] font-semibold gap-2"
              startContent={icon}
            >
              {label}
            </Button>
          ))}
        </div>

        <Divider className="bg-[#3e4042]" />

        {/* Comment Input */}
        <div className="flex items-center gap-2 px-4 py-3">
          <Avatar src={commentAvatar} size="sm" />
          <Input
            placeholder={commentPlaceholder}
            classNames={{
              inputWrapper:
                "bg-[#3a3b3c] rounded-full border-0 hover:bg-[#4a4b4c] h-9",
              input: "text-sm text-white placeholder:text-[#b0b3b8]",
            }}
            endContent={
              <div className="flex items-center gap-1 text-[#b0b3b8] text-lg">
                <span className="cursor-pointer">😊</span>
                <span className="cursor-pointer">📷</span>
              </div>
            }
          />
        </div>
      </CardBody>
    </Card>
  );
};