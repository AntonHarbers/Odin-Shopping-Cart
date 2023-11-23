/* eslint-disable react/prop-types */
import Navbar from '../components/Navbar';

export default function About({ cart }) {
  return (
    <div>
      <Navbar cart={cart} />
      <div className=" bg-slate-300 h-[90vh] flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl">About Fakestore dot com</h1>
        <h2 className=" w-[80vw]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos officiis
          unde dolore iusto quaerat itaque est, sit reiciendis consectetur!
          Debitis fuga nulla natus temporibus voluptas eius eum atque
          repellendus consequatur. Quae esse perferendis et quasi recusandae
          ducimus debitis repellat provident temporibus dignissimos assumenda
          deserunt nesciunt illo enim consequuntur ea eius alias, similique
          sequi? Iusto officiis esse quibusdam eum. Molestiae, expedita! Dolorum
          quos neque obcaecati ut tempora deleniti alias voluptates rem porro
          quo impedit eum voluptate voluptatibus voluptatem itaque veritatis
          iusto, odit molestiae quam, reprehenderit enim minus! Sit quis
          molestias facilis. Sunt, quae architecto hic expedita suscipit
          explicabo odio voluptatem dolore harum dolor, atque, sed eos
          dignissimos fugiat vitae cupiditate. Fugit commodi consequatur
          adipisci, sed laboriosam aperiam dignissimos nemo possimus mollitia.
          Deleniti, consequuntur. Beatae possimus, non ipsam assumenda
          perspiciatis distinctio itaque, vero nihil expedita saepe nam
          provident sequi iusto! Eos, obcaecati alias at facere ducimus saepe?
          Facilis, ipsum ullam? Ex, error?
        </h2>
        <h2 className="w-[80vw]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum esse
          magni impedit eius nulla doloribus exercitationem molestiae nam
          facere, maxime iure, explicabo enim dolor sequi ratione ipsum atque
          temporibus veniam? Et animi modi enim deserunt, accusantium veritatis
          voluptas officia dolorum voluptates nesciunt, consequatur quas
          officiis earum blanditiis excepturi expedita laudantium. Quae libero
          similique architecto facilis id quam laborum omnis ipsum!
        </h2>
      </div>
    </div>
  );
}
