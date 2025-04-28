import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from "@/components/ui/badge"
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { FaRegCalendarAlt } from "react-icons/fa";
import usericon from '@/assets/images/user.png'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { RouteBlogDetails } from '@/helpers/RouteName'

const BlogCard = ({ props }) => {
    if (!props) return null; // <- **Safe check**

    const { category, slug, author, featuredImage, createdAt, title } = props;

    return (
        <Link to={category && slug ? RouteBlogDetails(category.slug, slug) : '#'}>
            <Card className="pt-5 h-[400px] flex flex-col justify-between"> {/* Fixed height */}
                <CardContent className="flex flex-col justify-between h-full"> {/* Ensures content stretches */}
                    <div className='flex items-center justify-between'>
                        <div className='flex justify-between items-center gap-2'>
                            <Avatar>
                                <AvatarImage src={author?.avatar || usericon} />
                            </Avatar>
                            <span>{author?.name || 'Unknown'}</span>
                        </div>
                        {author?.role === 'admin' && (
                            <Badge variant="outline" className="bg-violet-500">Admin</Badge>
                        )}
                    </div>

                    <div className='my-2'>
                        {featuredImage && (
                            <img src={featuredImage} className='rounded w-full h-[150px] object-cover' alt="Blog" /> 
                        )}
                    </div>

                    <div className="flex-1"> {/* Takes up remaining space */}
                        <p className='flex items-center gap-2 mb-2'>
                            <FaRegCalendarAlt />
                            <span>{createdAt ? moment(createdAt).format('DD-MM-YYYY') : ''}</span>
                        </p>
                        <h2 className='text-2xl font-bold line-clamp-2'>
                            {title || 'No Title'}
                        </h2>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default BlogCard
