import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  }),
};

const categories = [
  {
    name: 'Ecommerce',
    count: '7+ plataformas',
    description: 'Atiende carritos, pedidos y postventa desde un solo lugar.',
    tags: ['Shopify', 'VTEX', 'Jumpseller', 'WooCommerce', 'Magento', 'PrestaShop'],
    mcpBadge: null,
    customTag: null,
  },
  {
    name: 'Agendamiento',
    count: '4+ plataformas',
    description: 'Confirma, reagenda y recuerda citas por WhatsApp automáticamente.',
    tags: ['Dentalink', 'Agendapro', 'Reserva.cl', 'Calendly'],
    mcpBadge: null,
    customTag: '+ integración custom',
  },
  {
    name: 'CRM & ERP',
    count: '5+ sistemas',
    description: 'Centraliza clientes, pedidos y datos financieros en un solo flujo.',
    tags: ['Salesforce', 'HubSpot', 'SAP', 'Bsale', 'Defontana'],
    mcpBadge: null,
    customTag: null,
  },
  {
    name: 'API & Developer',
    count: 'Custom',
    description: 'Conecta cualquier sistema interno vía API REST, webhooks o MCP.',
    tags: ['API REST', 'Webhooks', 'MCP Server', 'Docs para devs'],
    mcpBadge: 'MCP',
    customTag: null,
  },
];

export const IntegracionesSection = () => {
  return (
    <section className="bg-[#0C0C0D] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        <motion.div
          className="flex justify-center mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0}
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#131415] border border-white/[0.08] text-[11px] font-medium text-[#A3A3A3] tracking-[2px] uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Integraciones
          </span>
        </motion.div>

        <motion.h2
          className="text-[26px] md:text-[36px] font-semibold leading-[1.2] text-white text-center mb-10 md:mb-14 max-w-[560px] mx-auto"
          style={{ fontFamily: "'Outfit', sans-serif" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0.1}
        >
          Conecta Adereso con el stack que ya usas
        </motion.h2>

        <div className="flex flex-col gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className="bg-[#131415] border border-white/[0.06] rounded-[20px] p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={0.15 + i * 0.05}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3
                    className="text-[17px] font-medium text-white"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {cat.name}
                  </h3>
                  {cat.mcpBadge && (
                    <span
                      className="px-2 py-0.5 rounded-full bg-[#0EA5E9]/15 text-[#38BDF8] text-[11px] font-medium"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {cat.mcpBadge}
                    </span>
                  )}
                </div>
                <span
                  className="text-[13px] text-[#666666]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {cat.count}
                </span>
              </div>

              <p
                className="text-[14px] text-[#777777] leading-[1.6] mb-4"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full bg-[#1a1b1c] border border-white/[0.08] text-[13px] text-[#A3A3A3]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
                {cat.customTag && (
                  <span
                    className="px-3 py-1 rounded-full border border-dashed border-white/20 text-[13px] text-[#666666]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {cat.customTag}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
