"use client";

import { useState } from "react";

import { shopItems } from "../data/shopItems";

import ShopDesktop from "./shop/ShopDesktop";
import ShopMobile from "./shop/ShopMobile";

type ShopProps = {
  coins: number;

  inventory: string[];

  onBuyPremium: () => void;

  buyItem: (
    item: string,
    price: number
  ) => void;

  onClose: () => void;
};

export default function Shop({
  coins,
  inventory,
  buyItem,
  onClose,
  onBuyPremium,
}: ShopProps) {

  const [activeTab, setActiveTab] =
    useState("featured");

  const [showMobileMenu, setShowMobileMenu] =
    useState(false);

  const filteredItems =
    activeTab === "featured"
      ? shopItems
      : shopItems.filter(
          (item) => item.category === activeTab
        );

  return (
    <main
      className="
      fixed
      inset-0
      z-[999]
      bg-[#071226]
      overflow-hidden
    "
    >
      

      <div className="md:hidden h-full overflow-y-auto">

        <ShopMobile
          coins={coins}
          inventory={inventory}
          activeTab={activeTab}
          filteredItems={filteredItems}
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          setActiveTab={setActiveTab}
          buyItem={buyItem}
          onBuyPremium={onBuyPremium}
          onClose={onClose}
        />

      </div>

      

      <div className="hidden md:block h-full">

        <ShopDesktop
          coins={coins}
          inventory={inventory}
          activeTab={activeTab}
          filteredItems={filteredItems}
          setActiveTab={setActiveTab}
          buyItem={buyItem}
          onBuyPremium={onBuyPremium}
          onClose={onClose}
        />

      </div>

    </main>
  );
}