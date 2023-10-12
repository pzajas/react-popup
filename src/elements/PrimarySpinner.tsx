import ClipLoader from 'react-spinners/ClipLoader'

interface IPrimarySpinner {
  color: string
  loading: boolean
}

export const PrimarySpinner = ({ color, loading }: IPrimarySpinner) => {
  return <ClipLoader color={color} loading={loading} size={10} aria-label="Loading Spinner" data-testid="loader" />
}
