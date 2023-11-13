
const ProjectForm = () => {
  return (
    <form className="flex justify-center w-screen min-h-screen py-8">
      <div className="mx-auto">
        <h1 className="text-4xl font-semibold leading-7 text-webGrey">Submit a project proposal for review!</h1>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="ProjectName" className="block text-lg font-medium leading-6 text-gray-900">
                Project Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-webTeal sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-800 sm:text-sm"></span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="My Project Name "
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-lg font-medium leading-6 text-gray-900">
                About
              </label>
              <p className="mt-1 text-sm leading-6 text-gray-400">Please write a few sentences describing your project.</p>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-webTeal sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>

          <br />

        <div className="border-b border-t border-gray-900/10 pt-2 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Features</h2>
          <p className=" text-sm leading-6 text-gray-400">
            Let us know what features you want to incorporate into your website!</p>

          <div className="mt-5 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-webTeal">Select All That Apply:</legend>
              <div className="mt-6 space-y-6">


              <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="authentication"
                      name="authentication"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-webTeal focus:ring-webTeal"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="authentication" className="font-medium text-gray-900">
                      User Registration and Authentication</label>
                    <p className="text-gray-500">Create account and Log in features</p>
                  </div>
                </div>


                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="animations"
                      name="animations"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-webTeal focus:ring-webTeal"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="animations" className="font-medium text-gray-900">
                      Animations</label>
                    <p className="text-gray-500">Animations and Visual Effects</p>
                  </div>
                </div>



                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="contactForms"
                      name="contactForms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-webTeal focus:ring-webTeal"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="contactForms" className="font-medium text-gray-900">
                      Contact Forms
                    </label>
                    <p className="text-gray-500">Contact form for Users</p>
                  </div>
                </div>

                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="ecommerce"
                      name="ecommerce"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-webTeal focus:ring-webTeal"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="ecommerce" className="font-medium text-gray-900">
                      ECommerce Features
                    </label>
                    <p className="text-gray-500">ECommerce for Businesses such as Stripe integration </p>
                  </div>
                </div>

                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="testimonials"
                      name="testimonials"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-webTeal focus:ring-webTeal"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="testimonials" className="font-medium text-gray-900">
                    Testimonials
                    </label>
                  </div>
                </div>

                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="faqPage"
                      name="faqPage"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-webTeal focus:ring-webTeal"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="faqPage" className="font-medium text-gray-900">
                    FAQ Page
                    </label>
                  </div>
                </div>






              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Do you Have a GitHub?</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">Select below</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-webGrey focus:ring-webGrey"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-webGrey focus:ring-webGrey"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    No
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className=" rounded-md text-sm font-semibold leading-6 text-gray-900 hover:text-gray-400">Cancel
        </button>
        <button type="submit" className="rounded-md bg-webTeal px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-webGrey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-webTeal"
        >Save
        </button>
        </div>



        </div>
    </form>
  )
};
export default ProjectForm;
