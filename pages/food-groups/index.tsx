import React from 'react'
import { useRouter } from 'next/router'
import { Recipe } from 'lib/types'

import FoodGroups from 'components/FoodGroups'

/**
 */
const FoodGroupsPage: React.FC = () => {
        return (
            <>
                <FoodGroups/>
            </>
        )
}

export default FoodGroupsPage
