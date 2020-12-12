import React from 'react'

export interface UserProps {
  title?: string
}

export const User: React.FC<UserProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default User
