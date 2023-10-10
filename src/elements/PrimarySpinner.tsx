import ClipLoader from 'react-spinners/ClipLoader'

export const PrimarySpinner = ({ color, loading }) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      // css={override}
      size={10}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}
