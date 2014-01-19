class Api::ItemsController < ApplicationController

  def create
    @checklist = Checklist.find_by_id(params[:checklist_id])
    @item = Item.new(params[:item])
    @item.checklist = @checklist
    @item.position = @checklist.items.length
    if @item.save
      render :json => @item
    else
      render :json => @item.errors.full_messages
    end
  end

  def update
    @item = Item.find_by_id(params[:id])
    @item.update_attributes(params[:item])
    render :json => @item
  end

  def destroy
    @item = Item.find_by_id(params[:id])
    checklist = @item.checklist
    @item.destroy
    render :json => checklist, :include => :items
  end

end
