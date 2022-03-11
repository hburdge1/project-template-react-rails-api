class ResponsesController < ApplicationController

   def index
    render json: Response.all
  end

  def create
    icebreaker = Response.create!(:icebreaker_params)
    render json: icebreaker, include: :responses, status: :created
  
  end
  
  private

  def icebreaker_params
    params.permit(:response)
  end


end
