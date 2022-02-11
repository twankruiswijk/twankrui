export default function Newsletter() {
  return (
    <div id="revue-embed w-full">
      <form
        action="https://www.getrevue.co/profile/twan/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="flex flex-col md:flex-row">
          <div className="revue-form-group">
            <label htmlFor="member_email" className="hidden">
              Email address
            </label>
            <input
              className="revue-form-field w-full text-base px-8 py-3 rounded-md bg-transparent border border-white text-center"
              placeholder="Enter your email address"
              type="email"
              name="member[email]"
              id="member_email"
            />
          </div>
          <div className="revue-form-actions mt-4 md:mt-0 md:ml-2.5">
            <input
              type="submit"
              value="Join my newsletter"
              name="member[subscribe]"
              id="member_submit"
              className="w-full px-8 py-3 lg:px-12 border rounded-md text-base font-semibold cursor-pointer shadow-primary hover:shadow-primaryHalf"
            />
          </div>
        </div>
        <div className="revue-form-footer text-xs leading-relaxed opacity-25 mt-4 md:absolute">
          By subscribing, you agree with Revue’s{' '}
          <a target="_blank" href="https://www.getrevue.co/terms">
            Terms of Service
          </a>{' '}
          and{' '}
          <a target="_blank" href="https://www.getrevue.co/privacy">
            Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  );
}
