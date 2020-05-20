import React from 'react'
import { Movies } from 'scenes/Movies'
import { Router as BaseRouter } from '@reach/router'

export const Router: React.FC = () => (
  <BaseRouter>
    <Movies path="/" />
    {/**
     * TODO: Add route for Movie Detail
     */}
  </BaseRouter>
)
