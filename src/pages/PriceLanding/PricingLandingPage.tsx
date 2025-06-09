import React, { useEffect } from 'react';
import { Button, Card, Typography, Space } from 'antd';
import { 
  DatabaseOutlined, 
  PieChartOutlined, 
  CalendarOutlined, 
  SoundOutlined,
  FileImageOutlined,
  ShareAltOutlined,
  ShopOutlined,
  BarChartOutlined,
  ShoppingOutlined,
  TeamOutlined,
  GiftOutlined,
  BankOutlined,
  CloseOutlined
} from '@ant-design/icons';
import authApi from '@/api/authApi';
import { LoginInformation } from '@/types';

const { Title, Text } = Typography;

interface ServiceItem {
  id: string;
  name: string;
  price: string;
  icon: React.ReactNode;
}

const PricingLandingPage: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'crm',
      name: 'Sistema CRM',
      price: '€49',
      icon: <DatabaseOutlined />
    },
    {
      id: 'segment',
      name: 'Niveles de Segmentos',
      price: '€59',
      icon: <PieChartOutlined />
    },
    {
      id: 'events',
      name: 'Gestión de Eventos',
      price: '€99',
      icon: <CalendarOutlined />
    },
    {
      id: 'audience',
      name: 'Análisis de Audiencia',
      price: '€30',
      icon: <SoundOutlined />
    },
    {
      id: 'ai-images',
      name: 'IA para Texto e imágenes',
      price: '€70',
      icon: <FileImageOutlined />
    },
    {
      id: 'social',
      name: 'Distribuidores de Redes Sociales',
      price: '€129',
      icon: <ShareAltOutlined />
    },
    {
      id: 'sales',
      name: 'Venta de Entradas',
      price: '€59',
      icon: <ShopOutlined />
    },
    {
      id: 'pricing',
      name: 'Precios Dinámicos',
      price: '€67',
      icon: <BarChartOutlined />
    },
    {
      id: 'marketplace',
      name: 'Curso de Mercadotecnia',
      price: '€1289',
      icon: <ShoppingOutlined />
    },
    {
      id: 'clients',
      name: 'Clientes Directos',
      price: '€233',
      icon: <TeamOutlined />
    },
    {
      id: 'promotions',
      name: 'Acciones y Promociones',
      price: '€320',
      icon: <GiftOutlined />
    },
    {
      id: 'marketing',
      name: 'Agencia de Marketing',
      price: '€2400',
      icon: <BankOutlined />
    }
  ];


  return (
    <div className="pricing-container">
      <div className="pricing-card">
        {/* Header */}
        <div className="header-section">
          <Title level={2} className="gradient-title">
            Una solución más sencilla
          </Title>
          <Text className="subtitle">
            Ya no tendrás que pagar por más de 5 soluciones diferentes.
            <br />
            Convixio te lo trae todo a casa.
          </Text>
        </div>

        {/* Services List */}
        <div className="services-section">
          <Space direction="vertical" size={8} style={{ width: '100%' }}>
            {services.map((service) => (
              <Card
                key={service.id}
                size="small"
                className="service-card"
                bodyStyle={{ padding: '12px 16px' }}
              >
                <div className="service-content">
                  <Space size={12}>
                    <span className="service-icon">
                      {service.icon}
                    </span>
                    <span className="service-name">
                      {service.name}
                    </span>
                  </Space>
                  <span className="service-price">
                    {service.price}
                  </span>
                </div>
              </Card>
            ))}
          </Space>
        </div>

        {/* Additional Option */}
        <Card
          size="small"
          className="additional-option-card"
          bodyStyle={{ padding: '12px 16px' }}
        >
          <div className="additional-option-content">
            <Space>
              <CloseOutlined className="additional-option-icon" />
              <span className="additional-option-text">
                Lo que gastarías de otra manera
              </span>
            </Space>
            <span className="additional-option-price">
              €4774/mes
            </span>
          </div>
        </Card>

        {/* Main CTA */}
        <Card
          className="main-cta-card"
          bodyStyle={{ padding: '16px' }}
        >
          <div className="main-cta-content">
            <div className="main-cta-left">
              <div className="main-cta-avatar">
                <span className="main-cta-avatar-text">
                  C
                </span>
              </div>
              <span className="main-cta-title">
                Únete a la familia Convixio
              </span>
            </div>
            <span className="main-cta-price">
              €89/mes
            </span>
          </div>
        </Card>

        {/* Trial Button */}
        <Button
          type="primary"
          size="large"
          block
          className="trial-button"
        >
          Iniciar Mi Prueba
        </Button>

        <Text type="secondary" className="disclaimer-text">
          Sin compromiso • Cancela cuando quieras
        </Text>
      </div>
    </div>
  );
};

export default PricingLandingPage;

function useSubmitForm(arg0: (values: LoginInformation) => Promise<void>) {
    throw new Error('Function not implemented.');
}
