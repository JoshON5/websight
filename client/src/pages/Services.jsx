
const questions = [
    {
      faq: 'How do I begin?',
      answer: 'To begin, Sign Up for an account. Once you are signed in, proceed to the dashboard where you can submit a project form for review!'
    },
    {
        faq: 'How will I know if my project has been reviewed?',
        answer: 'On your dashboard, click on your project to take you the the project page. From there, you will see a review in progress/approved/denied.'
      },
      {
        faq: 'What is the service cost?',
        answer: 'Cost will be based on work load. Once your project is approved, our team will reach out to you to discuss further.'
      },
      {
        faq: 'What if I dont like my website',
        answer: 'sorry'
      },
  ]
  
  const Services = () => {
    return (
      <div className=" w-full m-12 bg-white py-24 sm:py-32 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-webTeal sm:text-4xl">How Websight works?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Contact us to find out more! 
            </p>
          </div>
          <ul className=" mx-10 px-12 grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2">
            {questions.map((question) => (
              <li key={question.faq}>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{question.faq}</h3>
                    <p className="text-sm font-semibold leading-6 text-webTeal">{question.answer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  export default Services;