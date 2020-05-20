import { useContext } from 'react'
import { ConfigurationLogoSizesEnum } from 'model/api/ConfigurationLogoSizesEnum'
import { ConfigurationPosterSizesEnum } from 'model/api/ConfigurationPosterSizesEnum'
import { ConfigurationBackdropSizesEnum } from 'model/api/ConfigurationBackdropSizesEnum'
import { ConfigurationProfileSizesEnum } from 'model/api/ConfigurationProfileSizesEnum'
import { ConfigurationStillSizesEnum } from 'model/api/ConfigurationStillSizesEnum'
import { GlobalContext } from 'components/GlobalContextProvider'

export type SizeEnum =
  | ConfigurationBackdropSizesEnum
  | ConfigurationLogoSizesEnum
  | ConfigurationPosterSizesEnum
  | ConfigurationProfileSizesEnum
  | ConfigurationStillSizesEnum

export const useGetImagePath = (
  size: SizeEnum
): ((url: string) => string | undefined) => {
  const { configuration } = useContext(GlobalContext)

  return (url: string) =>
    configuration && `${configuration.images.base_url}${size}${url}`
}
