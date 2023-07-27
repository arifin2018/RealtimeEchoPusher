import AppLayout from "@/Layouts/AppLayout";
import React, { useState } from "react";

export default function Chat(props) {
    const [values, setValues] = useState({
        message: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
        console.log(values);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <div className="flex flex-col justify-between h-[97vh]">
                <div className="border-b px-4 py-2">
                    <h1 className="font-semibold text-xl">
                        {props.userLogin.username}
                    </h1>
                </div>
                <div className="p-4 flex-1 overflow-y-auto">
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio, vero mollitia tenetur eligendi quam soluta
                        architecto assumenda explicabo repudiandae non et a
                        error tempora molestiae vel cumque quibusdam incidunt
                        amet.
                    </span>
                    <span>
                        Unde, quam consequuntur. Aut beatae quod ea. Consectetur
                        eos et non? Sit perspiciatis laborum aspernatur nobis
                        alias culpa cumque, quis sapiente enim beatae aperiam
                        iure accusantium nostrum neque rerum esse.
                    </span>
                    <span>
                        Odit aperiam esse a dignissimos amet dolore, in fuga
                        delectus eos enim soluta? Modi hic iure ratione minima?
                        Corporis, culpa nostrum nisi recusandae error beatae
                        omnis facilis officia provident quasi!
                    </span>
                    <span>
                        Harum inventore delectus, impedit est debitis sit ipsam
                        atque nihil non expedita similique numquam! Maiores
                        adipisci fugit consequatur deserunt explicabo
                        repellendus qui, tenetur debitis, architecto rerum
                        eveniet modi aspernatur! Eligendi.
                    </span>
                    <span>
                        Dolores ea officia nostrum nesciunt veritatis ex
                        exercitationem facere nemo sunt ut vitae voluptatibus,
                        in qui neque molestias animi eius cumque inventore
                        praesentium dicta dolorem ratione id numquam aliquam!
                        Quaerat!
                    </span>
                    <span>
                        Enim ab, cumque, aperiam esse ut quam sapiente labore,
                        distinctio laboriosam aspernatur blanditiis nisi magnam
                        incidunt cupiditate pariatur aliquid maxime minima omnis
                        corrupti hic! Doloremque placeat eaque reiciendis
                        dolorum eveniet.
                    </span>
                    <span>
                        Accusamus impedit vero illo. Adipisci quam aut culpa,
                        rem corporis laborum. Asperiores esse, ex magni quo
                        nihil ipsum nisi, ea voluptates iste molestiae
                        necessitatibus at deleniti rerum maxime libero rem.
                    </span>
                    <span>
                        Aliquid odit quidem explicabo ea vel minus animi
                        mollitia, ut accusamus nesciunt praesentium, ratione,
                        rerum ex tenetur pariatur numquam itaque nulla magnam
                        ipsam porro! Exercitationem numquam asperiores hic animi
                        eveniet?
                    </span>
                    <span>
                        Necessitatibus commodi dolor odit rerum ullam, alias
                        deleniti eligendi nam voluptatibus quia sequi, cumque
                        sit voluptatem incidunt? Veritatis eveniet, suscipit
                        velit delectus nesciunt, ex earum porro consequuntur
                        saepe reiciendis cum.
                    </span>
                    <span>
                        Hic nobis voluptatem nam distinctio aspernatur sint
                        suscipit vel, ducimus ullam pariatur? Accusamus, itaque
                        dicta, ducimus beatae non sunt enim repellendus
                        blanditiis deleniti molestiae et qui tenetur veniam
                        optio debitis!
                    </span>
                    <span>
                        Incidunt ab repudiandae distinctio asperiores minima
                        perferendis, accusantium veritatis eveniet
                        exercitationem nostrum saepe vitae nulla, animi iste ut
                        consequuntur officia laudantium voluptas cum iure
                        repellat laborum. Incidunt voluptatem voluptates
                        tempora.
                    </span>
                    <span>
                        Illum cum maxime nam expedita, qui, laboriosam
                        consequatur eum exercitationem unde assumenda similique
                        aspernatur temporibus. Eligendi voluptatum quidem quae
                        in aperiam iste minus nesciunt, explicabo quod quia
                        tenetur voluptate nulla?
                    </span>
                    <span>
                        Dolores atque necessitatibus, voluptates sunt tempora
                        illum id nam ex esse ipsum est ipsam maxime excepturi
                        voluptate alias! Nulla eligendi sit sint sed, illum
                        obcaecati? Enim id rem fuga quia?
                    </span>
                    <span>
                        Incidunt recusandae quibusdam placeat nostrum tenetur
                        soluta dolore beatae hic qui id repellendus facilis
                        architecto ducimus officia reiciendis error esse animi
                        assumenda quidem, cupiditate illum sint iste. Eligendi,
                        quo animi!
                    </span>
                    <span>
                        Hic asperiores, voluptatum unde dolorem animi harum
                        impedit alias quia sed nemo, voluptate, obcaecati
                        voluptas reprehenderit eaque reiciendis quae. Delectus
                        incidunt recusandae distinctio facilis quam molestias
                        alias debitis molestiae unde.
                    </span>
                    <span>
                        Repudiandae fuga voluptatem harum autem, quisquam,
                        architecto temporibus nemo id repellat veritatis
                        expedita? Voluptates mollitia blanditiis corporis autem
                        est sint ut, fugit doloribus totam quae deserunt? Vitae
                        vel aliquam neque!
                    </span>
                    <span>
                        Dolor dolorum quia quisquam expedita excepturi. Saepe
                        earum deleniti accusantium eligendi! Consequatur sit
                        provident accusamus unde obcaecati. Amet reprehenderit,
                        officia ut, corporis in dolorum sed, aspernatur pariatur
                        illum omnis accusamus.
                    </span>
                    <span>
                        Ab et, quis perferendis, magnam accusantium, facere quo
                        error voluptate iure delectus ea ut voluptatibus labore
                        consequuntur ipsa maxime neque quas ex! Facere
                        exercitationem mollitia, quos ducimus impedit quibusdam
                        provident.
                    </span>
                    <span>
                        Adipisci magni quos aperiam a, sint eligendi esse porro
                        praesentium, dolor, ut nisi mollitia quae at iure ad
                        maxime tenetur nobis enim modi officia voluptate
                        consequatur corporis harum! Soluta, possimus.
                    </span>
                    <span>
                        Deserunt labore, nam libero obcaecati velit dicta nemo
                        odio veniam, perspiciatis sed saepe porro officiis
                        repudiandae, distinctio repellendus aspernatur eos nobis
                        quibusdam laboriosam eaque ut rem iure numquam quisquam?
                        Aliquid?
                    </span>
                    <span>
                        Ex iusto magni, possimus, aut pariatur commodi assumenda
                        iure ad voluptatum sint distinctio non velit. Ipsa
                        aperiam, ex impedit explicabo, minima qui temporibus
                        voluptatibus necessitatibus, suscipit nemo deserunt rem
                        distinctio!
                    </span>
                    <span>
                        Totam laboriosam ratione ad rerum in, natus voluptate?
                        Obcaecati, cupiditate facere animi exercitationem
                        quaerat iste illo perspiciatis excepturi culpa impedit
                        molestiae corrupti tempore et reiciendis velit sed
                        sapiente? Quasi, unde.
                    </span>
                    <span>
                        Cum quisquam nemo nihil obcaecati magni odit, qui quia
                        molestias sit dignissimos non iste magnam cumque
                        incidunt ad architecto, rem nesciunt. Fuga reprehenderit
                        culpa esse aspernatur veniam consectetur neque eius?
                    </span>
                    <span>
                        Eos praesentium amet culpa officiis officia, aut
                        corporis delectus natus minima rerum laboriosam eveniet!
                        Iusto at, perferendis facere sunt deleniti odio sint
                        consequuntur cumque dolores eum quos fugit placeat
                        magni?
                    </span>
                    <span>
                        Quidem distinctio impedit provident cum nemo odio dolore
                        perspiciatis nam accusantium animi fuga dolores velit
                        debitis id necessitatibus, nobis vero fugiat
                        reprehenderit veritatis illo quos vitae eligendi! Cum,
                        esse facilis?
                    </span>
                    <span>
                        Laboriosam velit atque dicta! Aspernatur, ut iusto.
                        Accusamus in fuga facilis veniam quam quos alias harum
                        voluptate nihil. Nihil quis voluptatibus minima
                        repellendus non magni ullam, illo consectetur tempore
                        maiores.
                    </span>
                    <span>
                        Odit vitae corrupti quia ea autem veritatis laudantium
                        delectus corporis, nihil dolores sapiente accusantium
                        iste eius. Vel assumenda labore repellendus, accusamus
                        minus quis nihil quaerat alias dolores reiciendis,
                        perspiciatis quae.
                    </span>
                    <span>
                        Doloribus excepturi nihil, sed fugit aspernatur eius
                        voluptates perspiciatis soluta eum, voluptatum
                        voluptatem molestias, molestiae totam earum amet
                        exercitationem accusamus? Maxime consequuntur nobis
                        optio architecto fugiat eveniet ex necessitatibus
                        asperiores.
                    </span>
                    <span>
                        Maiores quae earum ex doloremque totam? Amet
                        voluptatibus tempore deserunt illum? Obcaecati explicabo
                        veniam est ad, aliquid cum in eaque minima dolorum
                        repellat mollitia tempora fugiat maxime illum pariatur
                        blanditiis?
                    </span>
                    <span>
                        Quae enim corporis delectus nulla libero. Explicabo
                        laboriosam nesciunt nemo ratione minima sed sequi alias.
                        Obcaecati praesentium minus soluta sequi veritatis sunt
                        excepturi, et illum, fuga dolores asperiores quibusdam
                        aliquid?
                    </span>
                </div>
                <div className="border-t-2">
                    <form method="post" onSubmit={handleSubmit}>
                        <input
                            value={values.message}
                            onChange={handleChange}
                            className="w-full border-x-green-950 form-input border-0 focus:border-t-2 focus:ring-0"
                            placeholder="text message"
                            type="text"
                            name="message"
                            id="message"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

Chat.layout = (page) => <AppLayout children={page} />;
