import {
  FaWhatsapp,
  FaHome,
  FaWifi,
  FaCamera,
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
            width={300}
            height={300}
          />
          <p className="text-3xl font-bold text-gray-100">
            Tecnologia e conforto na sua casa
          </p>
        </div>
      </header>

      {/* Sobre Nós */}
      <section className="p-16 text-center bg-gradient-to-b from-gray-100 to-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">Sobre Nós</h2>
        <p className="mt-6 text-gray-700 text-xl leading-relaxed">
          Transformamos sua casa ou estabelecimento comercial em um ambiente
          inteligente! Oferecemos soluções de automação, redes Wi-Fi e CFTV para
          mais segurança, conforto e economia.
        </p>
      </section>
      {/* Serviços */}
      <section className="p-14 bg-black">
        <h2 className="text-2xl font-bold text-center text-white">
          Nossos Serviços
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaHome className="text-gray-800 text-4xl mx-auto" />,
              title: "Automação",
              desc: "Controle de iluminação, som e climatização.",
              images: ["/img/interruptor.jpg", "/img/alexa.jpg"],
            },
            {
              icon: <FaWifi className="text-gray-800 text-4xl mx-auto" />,
              title: "Redes Wi-Fi",
              desc: "Conexão estável e de alta velocidade. Aumente o alcance da sua rede e cubra todos os ambientes.",
              images: ["/img/ubiquiti.jpg", "/img/tplink.jpg"],
            },
            {
              icon: <FaCamera className="text-gray-800 text-4xl mx-auto" />,
              title: "CFTV",
              desc: "Monitore sua residência ou estabelecimento comercial de onde estiver, e integre com seu sistema de automação.",
              images: ["/img/cftv.jpg", "/img/camera.jpg"],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-700 rounded-lg shadow bg-white"
            >
              {service.icon}
              <h3 className="font-bold mt-2 text-gray-600">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
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

      {/* Benefícios */}
      <section className="p-14 text-center bg-white">
        <h2 className="text-2xl font-bold text-gray-800">
          Benefícios da Automação
        </h2>
        <ul className="mt-6 text-gray-600 space-y-4">
          <li className="text-lg">
            ✔ Mais conforto: controle tudo pelo celular ou voz.
          </li>
          <li className="text-lg">
            ✔ Economia de energia: iluminação automatizada.
          </li>
          <li className="text-lg">
            ✔ Segurança reforçada: monitoramento em tempo real.
          </li>
          <li className="text-lg">
            ✔ Valorização do imóvel: tecnologia agrega valor.
          </li>
        </ul>{" "}
      </section>

      {/* Contato */}
      <footer className="p-14 bg-black text-white text-center">
        <h2 className="text-2xl font-bold">Entre em Contato</h2>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://wa.me/+5513991545193"
            className="text-green-500 text-4xl hover:scale-110 transition-transform duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:diogoinovahome@gmail.com"
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
