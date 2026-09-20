import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GemGovtBanner } from './components/GemGovtBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { CategoriesPage } from './components/CategoriesPage';
import { OurJourneySection } from './components/OurJourneySection';
import { ReportsSection } from './components/ReportsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProjectsCaseStudies } from './components/ProjectsCaseStudies';
import { BrandPartners } from './components/BrandPartners';
import { DistrictCoverage } from './components/DistrictCoverage';
import { StaffSection } from './components/StaffSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RfqModal } from './components/RfqModal';
import { Product, ProductCategory, RFQItem, NavigationTab } from './types';
import { PRODUCTS } from './data/mockData';

export default function App() {
  // Navigation active tab matching the attached user image:
  // Home | Products | Categories | Our Journey | Reports | Staff | Contact
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ProductCategory | 'All'>('All');

  // RFQ Bag State with local storage persistence
  const [rfqItems, setRfqItems] = useState<RFQItem[]>(() => {
    try {
      const saved = localStorage.getItem('rangayan_rfq_items');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    // Default starter items for interactive demonstration
    return [
      { product: PRODUCTS[0], quantity: 2 }, // Canon imageRUNNER 2925i (BIS Series)
      { product: PRODUCTS[3], quantity: 2 }, // Cisco Catalyst 9200L
    ];
  });

  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('rangayan_rfq_items', JSON.stringify(rfqItems));
    } catch {
      // ignore
    }
  }, [rfqItems]);

  const handleAddToRfq = (product: Product, quantity = 1) => {
    setRfqItems(prev => {
      const index = prev.findIndex(item => item.product.id === product.id);
      if (index >= 0) {
        const updated = [...prev];
        updated[index] = { ...updated[index], quantity };
        return updated;
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromRfq(productId);
      return;
    }
    setRfqItems(prev => 
      prev.map(item => item.product.id === productId ? { ...item, quantity } : item)
    );
  };

  const handleRemoveFromRfq = (productId: string) => {
    setRfqItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearRfq = () => {
    setRfqItems([]);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProductForModal(product);
  };

  const handleSelectCategoryFromCategoriesPage = (category: ProductCategory) => {
    setSelectedCategoryFilter(category);
    setCurrentTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-orange-500/20 selection:text-orange-950">
      {/* Top Navbar with Multi-colored Flower Logo, exact 7 nav items, search & Request Quote button */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        rfqItems={rfqItems}
        onOpenRfq={() => setIsRfqOpen(true)}
        onSelectProduct={handleSelectProduct}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Sections dynamically responding to currentTab */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            {/* Hero Showcase with Canon BIS Distributorship & Gomti Nagar Address */}
            <Hero onOpenRfq={() => setIsRfqOpen(true)} onNavigate={handleNavigate} />

            {/* Government e-Marketplace (GeM) & UP Integrator Section */}
            <GemGovtBanner onOpenRfq={() => setIsRfqOpen(true)} />

            {/* Hardware & Equipment Catalog Preview */}
            <ProductCatalog
              rfqItems={rfqItems}
              onAddToRfq={handleAddToRfq}
              onRemoveFromRfq={handleRemoveFromRfq}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedProductForModal={selectedProductForModal}
              setSelectedProductForModal={setSelectedProductForModal}
              onOpenRfq={() => setIsRfqOpen(true)}
              initialCategory={selectedCategoryFilter}
            />

            {/* Enterprise Solutions & Systems Integration Services */}
            <SolutionsSection onOpenRfq={() => setIsRfqOpen(true)} />

            {/* Featured Projects & Case Studies (Contract details removed) */}
            <ProjectsCaseStudies />

            {/* Authorized OEM Brand Partners */}
            <BrandPartners />

            {/* Uttar Pradesh 75 Districts Reach & Pan-India Logistics */}
            <DistrictCoverage />

            {/* Staff & Leadership Directory with individual connection links */}
            <StaffSection />

            {/* About Rangayan Creations (Founding, Gomti Nagar Lucknow, Engineering Mission) */}
            <AboutSection />

            {/* Contact & Technical Requisition Form with exact office address */}
            <ContactSection />
          </>
        )}

        {currentTab === 'products' && (
          <div className="pt-2">
            <ProductCatalog
              rfqItems={rfqItems}
              onAddToRfq={handleAddToRfq}
              onRemoveFromRfq={handleRemoveFromRfq}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedProductForModal={selectedProductForModal}
              setSelectedProductForModal={setSelectedProductForModal}
              onOpenRfq={() => setIsRfqOpen(true)}
              initialCategory={selectedCategoryFilter}
            />
          </div>
        )}

        {currentTab === 'categories' && (
          <CategoriesPage
            onSelectCategory={handleSelectCategoryFromCategoriesPage}
            onOpenRfq={() => setIsRfqOpen(true)}
          />
        )}

        {currentTab === 'journey' && (
          <OurJourneySection onOpenRfq={() => setIsRfqOpen(true)} />
        )}

        {currentTab === 'reports' && (
          <ReportsSection onOpenRfq={() => setIsRfqOpen(true)} />
        )}

        {currentTab === 'staff' && (
          <div className="pt-4">
            <StaffSection isPage={true} />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="pt-4">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Bill of Materials (BOM) & RFQ Drawer Modal */}
      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        rfqItems={rfqItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromRfq}
        onClearAll={handleClearRfq}
      />
    </div>
  );
}
