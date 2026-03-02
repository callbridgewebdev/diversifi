"use client";

import { supabase } from "@/integrations/supabase/client";

// Current session user persistence for UI state
export const saveUser = (userData: any) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const logout = async () => {
  // Terminate institutional Supabase session
  await supabase.auth.signOut();
  
  // Clear node cache
  localStorage.removeItem("user");
  
  // Redirect to terminal auth
  window.location.href = "/login";
};