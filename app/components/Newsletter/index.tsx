import Button from '../Button';

type Props = {
  column?: boolean;
};

export default function Newsletter({ column }: Props) {
  return (
    <div id="revue-embed w-full">
      <form
        action="https://www.getrevue.co/profile/twan/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className={`flex flex-col ${column ? '' : 'md:flex-row'} `}>
          <div className="revue-form-group">
            <label>
              <span className="hidden">Email address</span>
              <input
                className={`revue-form-field w-full ${
                  column ? '' : 'md:w-72'
                } text-base px-8 py-3 rounded-md bg-transparent border border-white text-center shadow-inner`}
                placeholder={`${
                  column ? 'Your email address' : 'Enter your email address'
                } `}
                type="email"
                name="member[email]"
              />
            </label>
          </div>
          <div
            className={`revue-form-actions mt-4 ${
              column ? '' : 'md:mt-0 md:ml-2.5'
            }`}
          >
            <Button title="Join my newsletter" isNewsletter />
          </div>
        </div>
        <div
          className={`revue-form-footer text-xs leading-relaxed opacity-50 mt-4 ${
            column ? '' : 'md:absolute'
          }`}
        >
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
