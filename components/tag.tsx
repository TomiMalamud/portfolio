interface Props {
  text: string
}
{/* "I'm considering the concept of 'file over app.' Perhaps in the future, I will replace the fancy tags with traditional ones. */}

const Tag = ({ text }: Props) => {
  return (
    <p
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </p>
  )
}

export default Tag