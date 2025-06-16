import React, { useState } from 'react';
import { Layout, Menu, Button, Badge, Drawer } from 'antd';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styles from '../../../../styles/Header/Header.module.scss';
import { HeaderProps, MenuItem } from '../../../../types/Header/header.types';

const { Header: AntHeader } = Layout;

const LogoSVG = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#2D38FF" />
        <rect x="10" y="12" width="12" height="2.5" rx="1.25" fill="white" />
        <rect x="10" y="17.5" width="12" height="2.5" rx="1.25" fill="white" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ className }) => {
    const [selectedKey, setSelectedKey] = useState<string>('home');
    const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);

    const menuItems: MenuItem[] = [
        { key: 'home', label: 'Home', href: '/' },
        {
            key: 'pages', label: 'Pages', children: [
                { key: 'teacher', label: 'Teacher', href: '/teachers' },
                { key: 'teacher-profile', label: 'Teacher Profile', href: '/teacher-profile' },
                { key: 'blog', label: 'Blog', href: '/blog' }
            ]
        },
        { key: 'courses', label: 'Courses', href: '/courses' },
        { key: 'about', label: 'About', href: '/about' }
    ];

    const antMenuItems: MenuProps['items'] = menuItems.map(item => ({
        key: item.key,
        label: item.label,
        children: item.children?.map(child => ({
            key: child.key,
            label: child.label
        }))
    }));

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setSelectedKey(e.key);

        let selectedItem: MenuItem | undefined;

        selectedItem = menuItems.find(item => item.key === e.key);

        if (!selectedItem) {
            for (const item of menuItems) {
                if (item.children) {
                    selectedItem = item.children.find(child => child.key === e.key);
                    if (selectedItem) break;
                }
            }
        }

        if (selectedItem && selectedItem.href) {
            window.location.href = selectedItem.href;
        }

        setMobileMenuVisible(false);
    };

    const handleCoursesClick = () => {
        // Navigate to courses page
        console.log('Navigate to courses');
    };

    const handleCartClick = () => {
        // Open cart drawer or navigate to cart
        console.log('Open cart');
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    return (
        <>
            <AntHeader className={`${styles.header} ${className || ''}`}>
                <div className={styles.headerContent}>
                    {/* Logo */}
                    <a href="/" className={styles.logo}>
                        <span className={styles.logoIcon}><LogoSVG /></span>
                        <span className={styles.logoText}>Academy</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className={styles.navigation}>
                        <Menu
                            mode="horizontal"
                            selectedKeys={[selectedKey]}
                            items={antMenuItems}
                            onClick={handleMenuClick}
                            className={styles.menu}
                        />
                    </nav>

                    {/* Right Section */}
                    <div className={styles.rightSection}>
                        {/* Cart Icon */}
                        <div className={styles.cartIcon} onClick={handleCartClick}>
                            <Badge count={2} size="small" offset={[0, 2]}>
                                <ShoppingCartOutlined style={{ fontSize: '18px', color: '#1A1A1A' }} />
                            </Badge>
                        </div>

                        {/* Courses Button */}
                        <Button
                            type="primary"
                            className={styles.coursesButton}
                            onClick={handleCoursesClick}
                            size="large"
                        >
                            COURSES
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            type="text"
                            icon={<MenuOutlined />}
                            className={styles.mobileMenuButton}
                            onClick={toggleMobileMenu}
                        />
                    </div>
                </div>
            </AntHeader>

            {/* Mobile Menu Drawer */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={toggleMobileMenu}
                open={mobileMenuVisible}
                width={280}
            >
                <Menu
                    mode="vertical"
                    selectedKeys={[selectedKey]}
                    items={antMenuItems}
                    onClick={handleMenuClick}
                />
            </Drawer>
        </>
    );
};

export default Header;