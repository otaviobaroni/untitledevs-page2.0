import { motion } from 'framer-motion';
import { Card } from './Card';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Cards() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5, delay: 0.2 }} // Adicione um pequeno atraso se desejar
      className="flex flex-col justify-center items-center gap-4 md:px-16 lg:px-0 self-stretch"
    >
      <motion.div
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.4 }} // Adicione um pequeno atraso se desejar
        className="w-full flex flex-col lg:flex-row justify-center items-center gap-4"
      >
        <Card
          icon="gantt-chart-square"
          title="Consultoria"
          content="Orientação especializada para alinhar sua infraestrutura de TI com seus objetivos de negócios."
        />
        <Card
          icon="panel-top"
          title="Websites"
          content="Crie uma presença online impressionante com sites adaptados a dispositivos móveis e desktops."
        />
        <Card
          icon="tablet-smartphone"
          title="Aplicativos"
          content="Desenvolvimento de aplicativos sob medida para atender às necessidades exclusivas da sua empresa."
        />
      </motion.div>
      <motion.div
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.6 }} // Adicione um pequeno atraso se desejar
        className="w-full flex flex-col lg:flex-row justify-center items-center gap-4"
      >
        <Card
          icon="building-2"
          title="Empresarial"
          content="Sistemas operacionais eficientes através da integração perfeita de sistemas e dados."
        />
        <Card
          icon="globe"
          title="Inovação"
          content="Inovação nos nossos negócios ampliando seus horizontes com tecnologias de ponta."
        />
        <Card
          icon="cog"
          title="Manutenção"
          content="Suporte especializado e manutenção para que você não fique na mão."
        />
      </motion.div>
    </motion.div>
  );
}
