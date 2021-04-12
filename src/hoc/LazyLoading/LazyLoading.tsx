import React, { Suspense } from 'react';
import Preloader from '../../components/common/Preloader/Preloader';

export const LazyLoading = (Component: React.ComponentType)=>{
    return(
        <Suspense fallback={<Preloader />}>
            <Component />
        </Suspense>
    )
}