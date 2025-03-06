import {
  FaWhatsapp,
  FaInstagram,
  FaHome,
  FaWifi,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Header */}
      <header
        className="relative text-white text-center py-10 bg-cover bg-center"
        style={{
          backgroundImage: "url(/img/casa_inteligente.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
          <Image
            className="mx-auto mb-4 rounded-lg shadow-md"
            src="/img/logo.png"
            alt="logo"
            width={400}
            height={400}
          />
          <p className="text-4xl font-bold text-gray-100">
            Tecnologia e conforto para sua casa
          </p>
        </div>
      </header>

      {/* Sobre Nós */}
      <section className="p-16 text-center bg-gradient-to-b from-gray-100 to-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Nossos Serviços</h2>
        <p className="mt-6 text-gray-700 text-xl leading-relaxed">
          Transformamos sua casa ou estabelecimento comercial em um ambiente
          inteligente! Oferecemos soluções de automação, redes Wi-Fi e CFTV para
          mais segurança, conforto e economia.<br></br>
          Atendemos Bertioga e Região do Litoral Norte de São Paulo.
        </p>
      </section>
      {/* Serviços */}
      <section className="p-14 bg-black">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaHome className="text-gray-800 text-4xl mx-auto" />,
              title: "Automação",
              desc: "Controle de iluminação, som e climatização. Crie cenários de acordo com sua rotina.",
              images: ["/img/interruptor.jpg", "/img/alexa.jpg"],
            },
            {
              icon: <FaWifi className="text-gray-800 text-4xl mx-auto" />,
              title: "Redes Wi-Fi",
              desc: "Conexão estável e de alta velocidade. Aumente o alcance da sua rede e cubra todos os ambientes.",
              images: ["/img/ubiquiti.jpg", "/img/tplink.jpg"],
            },
            {
              icon: <FaLock className="text-gray-800 text-4xl mx-auto" />,
              title: "Fechaduras Inteligentes",
              desc: "Tenha segurança com tecnologia, abra sua fechadura de onde estiver, e integre com seu sistema de automação.",
              images: ["/img/fechadura.png", "/img/fechadura2.png"],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-700 rounded-lg shadow bg-white"
            >
              {service.icon}
              <h3 className="font-bold mt-2 text-gray-600 text-2xl">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-xl">{service.desc}</p>
              <div className="grid grid-cols-2 gap-4">
                {service.images.map((img, i) => (
                  <Image
                    key={i}
                    className="w-full h-48 object-cover rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-transform duration-300"
                    src={img}
                    alt={service.title}
                    width={400}
                    height={400}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-16 text-center bg-gradient-to-b from-gray-100 to-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Sobre Nós</h2>
        <p className="mt-6 text-gray-700 text-xl leading-relaxed">
          Transformando Experiência em Inovação: O Surgimento da Inova Smart
          Home Com mais de 10 anos de experiência no setor de segurança
          eletrônica, redes e automação, tive a oportunidade de atuar em
          empresas líderes de mercado na região, gerenciando equipes técnicas,
          implementando soluções avançadas e garantindo a excelência na
          prestação de serviços. Durante essa jornada, aprendi a fundo as
          necessidades dos clientes e as melhores práticas para oferecer
          soluções que realmente fazem a diferença. Agora, chegou o momento de
          dar um novo passo: transformar toda essa bagagem em um negócio
          próprio, alinhado à inovação e à personalização que o mercado exige.
          Assim nasce a Inova Smart Home, uma empresa focada em oferecer
          tecnologia de ponta para automação residencial, redes Wi-Fi de alto
          desempenho e sistemas de segurança inteligentes. O objetivo é claro:
          proporcionar mais conforto, segurança e conectividade, sempre com
          atendimento diferenciado e soluções sob medida. Minha missão é levar
          para cada projeto o mesmo nível de qualidade e comprometimento que me
          acompanhou ao longo da minha trajetória profissional, mas agora com
          ainda mais liberdade para inovar e superar expectativas. Se você busca
          soluções tecnológicas para transformar seu espaço, conte com a
          experiência de quem já esteve à frente dos maiores desafios do setor e
          agora está pronto para entregar o melhor, com um atendimento exclusivo
          e personalizado. Inova Smart Home – Tecnologia para um dia a dia mais
          inteligente.
        </p>
      </section>

      {/* Contato */}
      <footer className="p-14 bg-black text-white text-center">
        <h2 className="text-2xl font-bold">Entre em Contato</h2>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://instagram.com/inova.smarthome"
            className="text-pink-400 text-4xl hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:contato@inovasmarthome.com.br"
            className="text-gray-300 text-4xl hover:scale-110 transition-transform duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </footer>
      {/* Botão WhatsApp Fixo */}
      <a
        href="https://wa.me/+5513991545193"
        className="fixed bottom-5 right-5 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}
