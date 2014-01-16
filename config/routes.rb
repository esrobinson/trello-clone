TrelloClone::Application.routes.draw do
  resources :users, :only => [:new, :create, :show, :edit, :update]
  resources :boards do
    resources :board_memberships, :only => [:create]
    resources :board_admins, :only => [:create]
    resources :lists, :only => [:create, :new]
  end
  resources :lists, :only => [:show, :edit, :update, :destroy] do
    resources :cards, :only => [:create, :new]
  end
  resources :cards, :only => [:show, :edit, :update, :destroy] do
    resources :comments, :only => [:create]
    resources :checklists, :only => [:new, :create]
  end
  resources :checklists, :only => [:show, :edit, :update, :destoy] do
    resources :items, :only => [:create]
  end

  resources :items, :only => [:update, :destroy]

  resource :session, :only => [:new, :create, :destroy]

  root :to => "static_pages#index"
  get "/backbone", :to => "static_pages#backbone"

  namespace :api do
    resources :boards, :only => [:index, :show, :create, :update, :destroy] do
      resources :board_memberships, :only => [:create]
      resources :board_admins, :only => [:create]
      resources :lists, :only => [:create]
    end
    resources :lists, :only => [:show, :update, :destroy] do
      resources :cards, :only => [:create]
    end
    resources :cards, :only => [:show, :update, :destroy] do
      resources :comments, :only => [:create]
      resources :checklists, :only => [:create]
    end
    resources :checklists, :only => [:show, :update, :destoy] do
      resources :items, :only => [:create]
    end

    resources :items, :only => [:update, :destroy]
  end
end
