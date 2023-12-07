/* eslint-disable react/prop-types */
import Navbar from '../components/Navbar';

export default function About({ cart }) {
  return (
    <div>
      <Navbar cart={cart} />
      <div className="display flex    h-[70vh] sm:h-[90vh] w-[100%] sm:w-[50%] p-10 sm:p-1 ml-auto mr-auto gap-10 text-start flex-col justify-normal sm:justify-center items-center pt-10 overflow-scroll lg:overflow-hidden pb-10">
        <h1 className="text-6xl">About Fakestore dot com</h1>
        <p className="text-gray-600">
          Welcome to Generic Store, your number one source for all things
          [product]. Were dedicated to giving you the very best of [product],
          with a focus on [three characteristics, e.g., dependability, customer
          service, and uniqueness].
        </p>
        <p className="text-gray-600 mt-4">
          Founded in [year] by [Founders Name], Generic Store has come a long
          way from its beginnings in [starting location]. When [Founder] first
          started out, [his/her/their] passion for [brand message - e.g.,
          eco-friendly cleaning products] drove them to [action you took, e.g.,
          do intense research, quit her day job, etc.] so that Generic most
          advanced toothbrush]. We now serve customers all over [place, e.g.,
          the United States], and are thrilled that were able to turn our
          passion into our own website.
        </p>
        <p className="text-gray-600 mt-4 mb-8">
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please dont hesitate to
          contact us.
        </p>
      </div>
    </div>
  );
}
