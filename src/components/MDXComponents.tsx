const MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-2xl font-bold text-gray-800" {...props} />
  ),
  p: (props: any) => <p className="text-base text-gray-600" {...props} />,
  button: (props: any) => (
    <button
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      {...props}
    />
  ),
  code: (props: any) => <code className="rounded bg-gray-200 p-1" {...props} />,
};

export default MDXComponents;
